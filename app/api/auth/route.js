import { NextResponse } from "next/server";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export async function POST(request) {
  const { email, password, task } = await request.json();
  console.log({ email, password, task });

  if (task === "register") {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({
        token: credentials.user.accessToken,
        uuid: credentials.user.uid,
      });

      //faire le register avec firebase 9

      return NextResponse.json({
        status: 200,
        message: `merci à vous le compte ${email} de l'utilisateur `,
      });
    } catch (err) {
      console.log({ serverErrMsg: err.message });

      //msg email already used
      if (err.message.includes("email-already-in-use")) {
        return NextResponse.json({
          status: 500,
          message: "sry le mail déjà used",
        });
      }
      if (err.message.includes("auth/weak-password")) {
        return NextResponse.json({
          status: 500,
          message: "le mdp doit faire au moins 6 caractères !",
        });
      }
      // le mots de passe doit avoir plus de 6 caractères
    }
  }

  if (task === "login") {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({ loginResponse: credentials });

      return NextResponse.json({
        status: 200,
        message: `Welcome back ${email}`,
        email,
        uid: credentials.user.uid,
        jwt: credentials.user.accessToken
      });
    } catch (error) {
      console.log({ serverErrMsg: error.message });
      if (error.message.includes("auth/weak-password")) {
        return NextResponse.json({
          status: 500,
          message: "Login failed, email or password incorrect",
        });
      }

      if (error.message.includes("auth/user-not-found")) {
        return NextResponse.json({
          status: 500,
          message: `no user with this ${email}`,
        });
      }

      console.log({ loginError: error });
      return NextResponse.json({
        status: 500,
        message: "login error",
      });
    }
  }
  return NextResponse.json({ status: 200, message: "Task unknown" });
}

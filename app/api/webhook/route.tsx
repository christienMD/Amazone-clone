// import { NextRequest, NextResponse } from "next/server";
// // const buffer = require("micro");
// // const { buffer } = require("micro");
// const getRawBody = require('raw-body');
// import * as admin from "firebase-admin";

// // secure a connection to firebas from the backend
// const serviceAccount = require("../../../permissions.json");
// const app = !admin.apps.length
//   ? admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//     })
//   : admin.app();

// // establish connection to stripe
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);

// const endpointSecrete = process.env.STRIPE_SIGNIN_SECRET;

// interface Session {
//   id: string;
//   amount_total: number;
//   total_details: {
//     amount_shipping: number;
//   };
//   metadata: {
//     images: string;
//   };
// }

// const fulfillOrder = async (session: Session) => {
//   // console.log('fulfilling order', session)

//   return app
//     .firestore()
//     .collection("users")
//     .doc(session.id)
//     .set({
//       amount: session.amount_total / 100,
//       amount_shipping: session.total_details.amount_shipping / 100,
//       images: JSON.parse(session.metadata.images),
//       timestamp: admin.firestore.FieldValue.serverTimestamp(),
//     })
//     .then(() => {
//       console.log(`succes: Order ${session.id} had beed added to the DB`);
//     });
// };

// export async function POST(request: NextRequest) {
//    if (request.method === "POST") {
//      const requestBuffer = await getRawBody(request);
//      const payload = requestBuffer.toString();
//      const sig = request.headers.get("stripe-signature");

//      let event;

//      // Verify that the event posted came from Stripe
//      try {
//        event = stripe.webhooks.constructEvent(payload, sig, endpointSecrete);
//      } catch (err) {
//        console.log("Webhook error:", err);
//        return NextResponse.json(`Webhook error: ${(err as Error).message}`, {
//          status: 400,
//        });
//      }

//      //handle the checkout.session.completed event
//      if (event.type === "checkout.session.completed") {
//        const session = event.data.object;
//        // fulfill the order...

//        try {
//          await fulfillOrder(session);
//          return NextResponse.json({ received: true }, { status: 200 });
//        } catch (error) {
//          console.error("Error fulfilling order: ", error);
//          return NextResponse.json(
//            `Error fulfilling order: ${(error as Error).message}`,
//            { status: 400 }
//          );
//        }
//      }
//    }
// }

// export const config = {
//   api: {
//     bodyParser: false,
//     externalResolver: true,
//   },
// };

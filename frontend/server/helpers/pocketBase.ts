import PocketBase from "pocketbase";
import { CircusPresale } from "~/types/presales";

const pocketbase = new PocketBase(process.env.POCKETBASE_ADDRESS);
await pocketbase.admins.authWithPassword("frontend@frontend.de", "1234567890");

export async function createCircusPresale(presale: CircusPresale) {
  const data = {
    name: presale.name,
    email: presale.email,
    regularCards: presale.regularCards,
    discountCards: presale.discountCards,
    performance: presale.performance?.collectionId,
  };

  console.log(data);

  await pocketbase.collection("circus_presales").create(data);
}

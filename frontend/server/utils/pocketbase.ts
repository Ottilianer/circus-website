import PocketBase from "pocketbase";

export async function getPocketbase() {
  const pocketbase = new PocketBase(process.env.POCKETBASE_ADDRESS ?? "");
  await pocketbase.admins.authWithPassword(
    process.env.POCKETBASE_ADMIN_USER ?? "",
    process.env.POCKETBASE_ADMIN_PASSWORD ?? ""
  );
  return pocketbase;
}

import PocketBase from "pocketbase";

export async function getPocketbase() {
  const {
    pocketbaseAdminPassword,
    pocketbaseAdminUser,
    public: { pocketbaseAddress },
  } = useRuntimeConfig();

  const pocketbase = new PocketBase(pocketbaseAddress ?? "");
  await pocketbase
    .collection("_superusers")
    .authWithPassword(pocketbaseAdminUser, pocketbaseAdminPassword);
  return pocketbase;
}

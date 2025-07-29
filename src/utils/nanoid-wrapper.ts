export async function getNanoId() {
  const { nanoid } = await import('nanoid');
  return nanoid();
}

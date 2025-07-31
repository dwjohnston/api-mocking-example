
export type Profile = {
  id: string;
  isInternalUser: boolean;
};

export async function getProfile(): Promise<Profile> {
  const res = await fetch('http://localhost:3000/v1/profile');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
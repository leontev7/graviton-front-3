
export class AuthRequest {
  id: string = "";
  firstName: string = "";
  lastName?: string;
  username?: string;
  photoUrl?: string;
  authDate: string = "";
  hash: string = "";
  referralCode?: string;
}

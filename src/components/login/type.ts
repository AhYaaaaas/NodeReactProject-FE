export interface loginConfig{
  uAccount: string,
  password:string
}
export interface loginResponse{
  "status":number,
  "uAccount":string,
  "uid":string,
  "token":string
}
export interface IContact{
  id?: number,
  nome: string,
  avatar: string | ArrayBuffer,
  celular: string,
  email: string,
  aniversario?: string,
  redes?: string,
  observacoes?: string
}

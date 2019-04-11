export default class Transfer {
  constructor(
    public id: number,
    public userId: number,
    public sum: number,
    public comment: string = '',
  ) {

  }

}

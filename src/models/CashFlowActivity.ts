export default class CashFlowActivity {
  constructor(
    public id: number,
    public timestamp: number,
    public userId: number,
    public sum: number,
    public comment: string = '',
  ) {

  }

}

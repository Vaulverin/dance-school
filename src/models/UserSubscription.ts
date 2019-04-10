export default interface UserSubscription {
  id: number;
  userId: number;
  subscriptionId: number;
  dateStart: string;
  dateEnd: string;
  sum: number;
  comment: string;
}

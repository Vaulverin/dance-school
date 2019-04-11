export default class User {
  // protected _lessons: Lesson[];
  // protected _roles: Role[];
  // protected _userSubscriptions: UserSubscription[];
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string = '',
    public password: string = '',
  ) {

  }

  get name() {
    return this.lastName + ' ' + this.firstName;
  }

}

class ConcreteLesson {
  constructor(
    public id: number,
    public lessonScheduleId: number,
    public lessonDate: string,
    public active: boolean,
    public lessonSchedule: LessonSchedule,
  ) {}

}

class LessonSchedule {
  constructor(
    public id: number,
    public lessonId: number,
    public weekday: Weekday,
    public time: string,
    public lesson: Lesson,
  ) {}

}

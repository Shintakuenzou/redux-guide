export default function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON", //indica qual ação está sendo realizada,
    module,
    lesson,
  };
}

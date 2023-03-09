import { connect } from "react-redux";

function Video({ activeModule, activeLesson }) {
  return (
    <div>
      <p>
        <strong>Módulo: {activeModule.title}</strong>
      </p>
      <p>
        <span>Aula: {activeLesson.title}</span>
      </p>
    </div>
  );
}

export default connect((state) => {
  return {
    activeModule: state.course.activeModule,
    activeLesson: state.course. activeLesson,
  };
})(Video);

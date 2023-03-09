import { connect } from "react-redux";
import * as CourseActions from "../../store/actions/actions";

//Quando temos uma actions separadas e ver que os parametros são os mesmos e o nome inclsive for igual pódemos usar um help do redux
//basicamente ele vai pegar o actions que importamos de outro arquivo e mapear em forma de propriedades para o nosso componente
import { bindActionCreators } from "redux";

//dispatch serve para disaparar actions para o redux
function Sidebar({ modules, toggleLesson }) {
  console.log();
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

//O connect no primeiro parametro ele recebe uma função que recebe o estado e devo retornar dessa função
//quias propriedades queremos daquela função
const mapStateToProps = (state) => {
  return { modules: state.course.modules };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ toggleLesson: CourseActions.default }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

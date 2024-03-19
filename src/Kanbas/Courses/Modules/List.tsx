import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      <button className="btn btn-primary">Collapse All</button>
      <button className="btn btn-warning">View Progress</button>
      <select>
        <option>Publish All</option>
        <option>Publish All Modules and Items</option>
        <option>Publish Modules only</option>
        <option>UnPublish All Modules</option>
      </select>
      <button className="btn btn-danger">+ Module</button>
      <hr></hr>

      <ul className="list-group wd-modules">
        <li className="p-3 list-group-item">
          <span className="float-end">

            <button className="btn btn-success rounded mr-2 ml-2 px-2"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            <button className="btn btn-primary rounded mr-2 px-2"
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </span>

          <input className="form-control half-width mb-2" value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />

          <textarea className="half-width form-control" value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            } />
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>

              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button
                    className="btn rounded btn-success mr-2 px-2"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>

                  <button
                    className="btn rounded btn-danger px-2"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>

                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
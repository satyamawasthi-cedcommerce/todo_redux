import React, { useState } from "react";

function Head() {
  // state variables to store tasks todo  and taskstobe done
  const [task, setTask] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const [inputs, setInputs] = useState("");
  const [temp, setTemp] = useState("left");
  const [temp2, setTemp2] = useState("left");
  const [holdind, setHoldind] = useState("");
  //   function to display todoTasks
  const displayTodo = () => {
    return (
      <>
        <button id="addTodo" onClick={addTodo}>
          Add Task <i className="fa-solid fa-plus"></i>
        </button>
      </>
    );
  };
  //   function to add tasks to be done
  const addTodo = () => {
    setTask([...task, inputs]);
  };
  //   function to display edited tasks
  const displayEdit = () => {
    return (
      <>
        <button id="updateTodo" onClick={() => updateTask()}>
          Update Task <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </>
    );
  };
  //   function to display updated tasks
  const updateTask = () => {
    if (temp === "left") {
      task[holdind] = inputs;
      setTask(task);
    } else {
      taskDone[holdind] = inputs;
      setTaskDone(taskDone);
    }
    setTemp2("left");
  };
  //   function for tasks done
  const done = (i) => {
    setTaskDone([...taskDone, task[i]]);
    task.splice(i, 1);
  };
  //   function tpo edit tasks
  const edit = (ind, b) => {
    if (b === 0) {
      setInputs(task[ind]);
      setTemp("left");
      setTemp2("accomplished");
      setHoldind(ind);
    } else {
      setInputs(taskDone[ind]);
      setTemp("accomplished");
      setTemp2("accomplished");
      setHoldind(ind);
    }
  };
  //   function to remove todo
  const removetodo = (flag) => {
    let tempTask = task;
    tempTask.splice(flag, 1);
    setTask([...tempTask]);
    console.log(tempTask);
  };
  const undo = (j) => {
    setTask([...task, taskDone[j]]);
    taskDone.splice(j, 1);
  };
  //   function to remove tasks done
  const deleteDone = (k) => {
    let tempTask2 = taskDone;
    taskDone.splice(k, 1);
    setTaskDone([...tempTask2]);
  };
  return (
    <>
      <div className="headDiv">
        <img
          src="https://www.svgrepo.com/show/407265/purple-circle.svg"
          alt="."
          style={{
            float: "right",
            width: "20%",
            opacity: "1",
            dispaly: "Block",
          }}
          id="flag"
        />
        <h1>Organize Your Hours with TO-DO</h1>
        <input
          type="text"
          placeholder="Enter task"
          id="Taskinput"
          onChange={(event) => setInputs(event.target.value)}
          value={inputs}
        />
        {temp2 === "left" ? displayTodo() : displayEdit()}
      </div>
      <div style={{ aligbItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="https://img.freepik.com/premium-vector/planning-illustration-flat-modern-design-illustration_566886-367.jpg"
            alt="."
            id="imagetodo"
          />
          <div id="taskdisplay">
            <h2 id="tasks">Here are your tasks for today</h2>

            {task.map((item, index) => {
              return (
                <li className="scheduled">
                  {" "}
                  <button
                    type="button"
                    className="doneT"
                    id={index}
                    onClick={() => done(index)}
                    style={{
                      color: "blue",
                      padding: "1%",
                      border: "none",
                      borderRadius: "3px",
                      marginRight: "5%",
                    }}
                  >
                    <i className="fa-solid fa-list-check fa-1x"></i>
                  </button>{" "}
                  {item}{" "}
                  <button
                    className="doneT"
                    style={{
                      color: "blue",
                      padding: "1%",
                      border: "none",
                      borderRadius: "3px",
                      marginLeft: "5%",
                    }}
                    onClick={() => edit(index, 0)}
                  >
                    <i className="fa-solid fa-pen-to-square fa-1x"></i>
                  </button>{" "}
                  <button
                    className="doneT"
                    onClick={() => removetodo(index)}
                    style={{
                      color: "Red",
                      padding: "1%",
                      border: "none",
                      borderRadius: "3px",
                      marginLeft: "3%",
                    }}
                  >
                    <i className="fa-solid fa-trash-can fa-1x"></i>
                  </button>
                </li>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="taskdone">
            <h2 id="Done">Your Accomplishments!!</h2>
            {taskDone.map((item2, index2) => {
              return (
                <li className="donetodo" id="index2">
                  {" "}
                  <button
                    id={index2}
                    onClick={() => undo(index2)}
                    className="doneT"
                    style={{
                      color: "blue",
                      padding: "2%",
                      border: "none",
                      borderRadius: "3px",
                      marginRight: "5%",
                    }}
                  >
                    <i class="fa-solid fa-clipboard-check"></i>
                  </button>{" "}
                  {item2}{" "}
                  <button
                    style={{
                      color: "blue",
                      padding: "2%",
                      border: "none",
                      borderRadius: "3px",
                      marginLeft: "7%",
                    }}
                    className="doneT"
                    onClick={() => edit(index2, 1)}
                  >
                    <i className="fa-solid fa-pen-to-square" />
                  </button>{" "}
                  <button
                    onClick={() => deleteDone(index2)}
                    style={{
                      color: "red",
                      padding: "2%",
                      border: "none",
                      borderRadius: "3px",
                      marginLeft: "5%",
                    }}
                    className="doneT"
                  >
                    <i className="fa-solid fa-trash-can" />
                  </button>
                </li>
              );
            })}
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-task-management-3178504-2670441.png"
            alt="."
            id="imageDone"
          />
        </div>
      </div>
    </>
  );
}

export default Head;

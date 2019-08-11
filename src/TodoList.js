import React from "react";
import firebase from "./config";
import { todoContainer } from "./container";
import { Subscribe, Provider } from "unstated-x";
import styled from "styled-components";
import { StyledListTitle, StyledList } from "./UI/UIItem";
import { ThemeProvider } from "styled-components";
import UIInput from "./UI/Input";
import theme from "./theme";
import UIIcon from "./UI/Icon";
import DatePicker from "./UI/DatePicker";
class TodoList extends React.Component {
  state = {
    newName: "",
    isOpenDatePicker: false
  };
  componentDidMount = () => {
    todoContainer.getTodoData();
    var connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function(snap) {
      // if (snap.val() === true) {
      //   alert("connected");
      // } else {
      //   alert("not connected");
      // }
    });
  };

  onChangeDueDate = () => {};
  onClickAdd = async () => {
    await todoContainer.addItem(this.state.newName, false, "10/21/2019");
    this.setState({ newName: "" });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider>
          <Subscribe to={[todoContainer]}>
            {() => {
              const { todo } = todoContainer.state;

              return (
                <Wrapper>
                  {todo &&
                    todo.map((todoItemContainer, key) => {
                      return (
                        <Subscribe to={[todoItemContainer]} key={key}>
                          {() => {
                            const {
                              name,
                              id,
                              dueTime
                            } = todoItemContainer.state;
                            return (
                              <Layout>
                                <UIInput
                                  value={name}
                                  onChange={name =>
                                    todoItemContainer.changeName(name)
                                  }
                                />
                                <ButtonGroup>
                                  <UIIcon
                                    onClick={() => todoContainer.deleteItem(id)}
                                    icon="binCompact"
                                    size="large"
                                  />
                                  <DatePicker
                                    date={dueTime}
                                    trigger={
                                      <UIIcon icon="clock" size="large" />
                                    }
                                    onChange={date => {
                                      todoItemContainer.changeDueDate(date);
                                    }}
                                  />
                                </ButtonGroup>
                              </Layout>
                            );
                          }}
                        </Subscribe>
                      );
                    })}
                </Wrapper>
              );
            }}
          </Subscribe>
          <ButtonGroup>
            <UIInput
              value={this.state.newName}
              placeholder="Add Name "
              onChange={newName => this.setState({ newName })}
              onKeyPress={event => {
                if (event.which === 13) {
                  this.onClickAdd();
                  event.target.value = "";
                }
              }}
            />

            <UIIcon icon="plus" size="large" onClick={this.onClickAdd} />
          </ButtonGroup>
        </Provider>
      </ThemeProvider>
    );
  }
}
export function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join("-");
}
class TodoItem extends React.Component {
  render() {
    return;
  }
}
const Wrapper = styled.div`
  width: 500px;
`;
const Layout = styled.div`
  display: flex;
`;
const ButtonGroup = styled.div`
  display: flex;
  svg {
    cursor: pointer;
  }
`;
export default TodoList;

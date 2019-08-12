import React from "react";
import firebase from "./config";
import { todoContainer } from "./container";
import { Subscribe, Provider } from "unstated-x";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import UIInput from "./UI/Input";
import theme from "./theme";
import UIIcon from "./UI/Icon";
import DatePicker from "./UI/DatePicker";
import { PrimaryButton ,SuccessButton, DangerButton} from "./UI/Button";
class TodoList extends React.Component {
  state = {
    newName: "",
    isOpenDatePicker: false,
    active: "All"
  };
  componentDidMount = () => {
    todoContainer.getTodoData();
  };
  componentDidUpdate(){
    todoContainer.getTodoData();
  }
  onClickAdd = async () => {
    await todoContainer.addItem(this.state.newName, false, '');
    this.setState({ newName: "" });
  };
  render() {
    const { active } = this.state;
    
    return (
      <Background>
        <ThemeProvider theme={theme}>
          <Provider>
            <Subscribe to={[todoContainer]}>
              {() => {
                const { todo } = todoContainer.state;

                return (
                  <Wrapper>
                    <div >
                      {["All", "Done", "DoNot"].map(item => (
                        <PrimaryButton
                          active={item === active}
                          onClick={() => this.setState({ active: item })}
                        >
                          {item}
                        </PrimaryButton>
                      ))}
                    </div>
                    {todo &&
                      todo
                        .filter(todoItemContainer => {
                          const { done } = todoItemContainer.state;
                          if (active === "All") return true;
                          if (active === "Done") return done;
                          if (active === "DoNot") return !done;
                        })
                        .map((todoItemContainer, key) => {
                          return (
                            <Subscribe to={[todoItemContainer]} key={key}>
                              {() => {
                                  const {
                                    name,
                                    id,
                                    dueTime,
                                    done
                                  } = todoItemContainer.state;
                                const ButtonWork  = done ?SuccessButton :  DangerButton 
                                
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
                                        onClick={() =>
                                          todoContainer.deleteItem(id)
                                        }
                                        icon="binCompact"
                                        size="large"
                                      />
                                      <DatePicker
                                        date={dueTime}
                                        trigger={
                                          <UIIcon icon="clock" size="large"  />
                                        }
                                        onChange={date => {
                                          todoItemContainer.changeDueDate(date);
                                        }}
                                      /> 
                                      
                                    <ButtonWork onClick={() => {todoItemContainer.toggleDone();todoContainer.setState({update: true}) }}>{done ?'Done':'Do not'}</ButtonWork>
                                    </ButtonGroup>
                                  </Layout>
                                );
                              }}
                            </Subscribe>
                          );
                        })}
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

                      <UIIcon
                        icon="plus"
                        size="large"
                        onClick={this.onClickAdd}
                      />
                    </ButtonGroup>
                  </Wrapper>
                );
              }}
            </Subscribe>
          </Provider>
        </ThemeProvider>
      </Background>
    );
  }
}
const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 500px;
`;
const Layout = styled.div`
  display: flex;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items  : center;
  button {
      margin : 4px;
      font-size : 10px;
      padding : 2px;
  }
  svg {
    cursor: pointer;
  }
`;
export default TodoList;

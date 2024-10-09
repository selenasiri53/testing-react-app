import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../todo'

test('should render todo component', () => {
    render(<Todo />);
    // retrieve component
    const todoElement = screen.getByTestId('todo-1');
    // make assertions on above
    expect(todoElement).toBeInTheDocument();
})
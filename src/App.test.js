import { render, screen } from '@testing-library/react';
import App from './App';

// 'renders learn react link' 테스트 케이스를 정의
// 해당 컴포넌트를 랜더링 하는 것
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

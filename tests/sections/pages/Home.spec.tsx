// test to exist home component

import { render, screen } from '@testing-library/react';
import { Home } from '../../../src/sections/pages/Home';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText("Mi pagina web");
   
    expect(heading).toBeInTheDocument();
  });
}
);
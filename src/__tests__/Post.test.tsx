import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../components/Post';

describe('Teste para o componente PostComments', () => {
    it('Deve permitir adicionar e exibir dois comentários', () => {
        render(<Post imageUrl="https://cdn.pixabay.com/photo/2024/05/03/15/12/beagle-8737254_1280.png">
            Olha só quanta fofura.
        </Post>);

        const form = screen.getByTestId('comment-form');
        expect(form).toBeInTheDocument();

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Ótimo post!' } });
        fireEvent.submit(form);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Muito legal!' } });
        fireEvent.submit(form);

        expect(screen.getByTestId('comment-0')).toHaveTextContent('Ótimo post!');
        expect(screen.getByTestId('comment-1')).toHaveTextContent('Muito legal!');
    });
});

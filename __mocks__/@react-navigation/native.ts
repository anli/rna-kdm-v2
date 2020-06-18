export const mockNavigate = jest.fn();

const useNavigation = () => ({
  navigate: mockNavigate,
});

export {useNavigation};

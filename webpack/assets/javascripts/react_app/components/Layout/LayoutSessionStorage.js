export const isLayoutCollapsed = () => {
  const collapsedState = sessionStorage.getItem(
    `["navCollapsed","pinnedPath"]`
  );
  return !!collapsedState && collapsedState.includes('true');
};

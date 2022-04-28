const SvgComponent = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    aria-hidden="true"
    {...props}
  >
    <path d="M14.5 11H13.5C13.2239 11 13 11.2239 13 11.5C13 11.7761 13.2239 12 13.5 12H14.5C14.7761 12 15 11.7761 15 11.5C15 11.2239 14.7761 11 14.5 11ZM4.5 3C3.67157 3 3 3.67157 3 4.5V14.5C3 15.8807 4.11929 17 5.5 17H15.5C16.3284 17 17 16.3284 17 15.5V6.5C17 5.84689 16.5826 5.29127 16 5.08535V4.5C16 3.67157 15.3284 3 14.5 3H4.5ZM4 14.5V5.91465C4.15639 5.96992 4.32468 6 4.5 6H15.5C15.7761 6 16 6.22386 16 6.5V15.5C16 15.7761 15.7761 16 15.5 16H5.5C4.67157 16 4 15.3284 4 14.5ZM4.5 4H14.5C14.7761 4 15 4.22386 15 4.5V5H4.5C4.22386 5 4 4.77614 4 4.5C4 4.22386 4.22386 4 4.5 4Z"></path>
  </svg>
);

export default SvgComponent;

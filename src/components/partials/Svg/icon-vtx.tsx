const SvgComponent = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#6869E7" />
    <g clipPath="url(#clip0_283_13528)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.3999 9.30566L15.9999 25.8561L25.5999 9.30567L6.3999 9.30566ZM22.7967 9.30567L15.9999 21.0782L10.5471 11.6755H15.8655L14.5599 13.9115L15.9807 16.3195L20.0511 9.30567H22.7967Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_283_13528">
        <rect
          width="19.2"
          height="19.2"
          fill="white"
          transform="translate(6.3999 7.04004)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;

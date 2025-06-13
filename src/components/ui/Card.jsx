import React from "react";

const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  shadow = "md",
  hover = false,
  onClick,
  header,
  footer,
  image,
  ...props
}) => {
  const baseStyles =
    "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-200";

  const variants = {
    default: "",
    elevated: "bg-white dark:bg-gray-800",
    outlined: "border-2",
    glass: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
    gradient:
      "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900",
  };

  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const shadows = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const hoverStyles = hover
    ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    : "";
  const clickableStyles = onClick ? "cursor-pointer" : "";

  const cardClasses = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${hoverStyles} ${clickableStyles} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {image && (
        <div className="mb-4 -mt-6 -mx-6 overflow-hidden rounded-t-lg">
          <img
            src={image.src}
            alt={image.alt || ""}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {header && (
        <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          {typeof header === "string" ? (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {header}
            </h3>
          ) : (
            header
          )}
        </div>
      )}

      <div className="flex-1">{children}</div>

      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};

// Sub-components for more structured usage
Card.Header = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

Card.Body = ({ children, className = "" }) => (
  <div className={`flex-1 ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = "" }) => (
  <div
    className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </div>
);

Card.Title = ({ children, className = "" }) => (
  <h3
    className={`text-lg font-semibold text-gray-900 dark:text-white mb-2 ${className}`}
  >
    {children}
  </h3>
);

Card.Description = ({ children, className = "" }) => (
  <p className={`text-gray-600 dark:text-gray-300 ${className}`}>{children}</p>
);

export default Card;

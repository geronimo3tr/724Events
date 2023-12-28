import PropTypes from "prop-types";
import { getMonthFromPeriod } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({ imageSrc, imageAlt, title, label, small = false, period, ...props }) => (
  <div data-testid="card-testid" className={`EventCard${small ? " EventCard--small" : ""}`} {...props}>
    <div className="EventCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      <div className="EventCard__label">{label}</div>
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title">{title}</div>
      <div className="EventCard__month">{getMonthFromPeriod(period)}</div>
    </div>
  </div>
);

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  period: PropTypes.string,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

EventCard.defaultProps = {
  imageAlt: "image",
  period: "",
  small: false,
};

export default EventCard;

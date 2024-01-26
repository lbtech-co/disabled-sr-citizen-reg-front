import DisabledCardBack from "../components/IdCards/DisabledCardBack";
import DisabledCardFront from "../components/IdCards/DisabledCardFront";

function DisabledPersonCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <DisabledCardFront />
      <DisabledCardBack />
    </div>
  );
}

export default DisabledPersonCard;

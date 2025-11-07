import FeatureCardItem from "./FeatureCardItem";

const FEATURES_DATA = [
  {
    id: 1,
    title: "Plan your schedules",
    description:
      "Streamline customer subscriptions and billing with automated scheduling tools.",
    imageSrc: "/assets/images/services/plan-your-schedules.jpeg",
    imageAlt: "Plan schedules dashboard",
  },
  {
    id: 2,
    title: "Analytics & insights",
    description:
      "Transform your business data into actionable insights with real-time analytics.",
    imageSrc:
      "/assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg",
    imageAlt: "Task management dashboard",
  },
  {
    id: 3,
    title: "Collaborate seamlessly",
    description:
      "Keep your team aligned with shared dashboards and collaborative workflows.",
    imageSrc:
      "/assets/images/services/data-visualization-dashboard-with-interactive-char.jpg",
    imageAlt: "Performance analytics dashboard",
  },
];

export default function FeatureCard() {
  return (
    <>
      <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
        {FEATURES_DATA.map((feature) => (
          <FeatureCardItem
            key={feature.id}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
          />
        ))}
      </div>
    </>
  );
}

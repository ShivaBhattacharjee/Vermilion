import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Google",
    position: "Software Engineer",
    time: "2022 - Present",
    location: "Atlanta",
    description:
      "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
    tech: [
      "Angular",
      "Python",
      "GCP",
      "Git",
      "GitHub",
      "Java",
      "Golang",
      "K8s",
    ],
  },
  {
    title: "Facebook",
    position: "Software Engineer",
    time: "2020 - 2022",
    location: "San Francisco",
    description:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    tech: ["React", "Node", "PHP", "GraphQL", "Presto", "Cassandra"],
  },
  {
    title: "Amazon",
    position: "Software Engineer",
    time: "2016 - 2020",
    location: "Seattle",
    description:
      "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
    tech: [
      "Java",
      "Python",
      "S3",
      "RDS",
      "Redshift",
      "PySpark",
      "HDFS",
      "Apache Airflow",
    ],
  },
];

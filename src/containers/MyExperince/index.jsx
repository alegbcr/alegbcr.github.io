// Components
import {
  Section,
  List,
  ItemList,
  Subtitle,
  Paragraph,
  SubtitleSecondary,
} from "../../containers/MyExperince/MyExperince";
const MyExperince = (props) => {
  return (
    <Section>
      <Subtitle>{props.title}</Subtitle>
      <List>
        {props.companies.map((company) => {
          return (
            <ItemList key={company.name} className="my-experience__item-list">
              <div
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <SubtitleSecondary style={{ width: "75%" }}>
                  {company.position}
                </SubtitleSecondary>
                <Paragraph className="subtitle-card">{company.years}</Paragraph>
              </div>
              <h4>{company.name}</h4>
              <Paragraph className="my-experience__paragraph">
                {company.description}
              </Paragraph>
            </ItemList>
          );
        })}
      </List>
    </Section>
  );
};

export default MyExperince;

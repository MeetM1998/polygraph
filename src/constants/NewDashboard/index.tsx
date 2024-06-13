import DATA from "./JSON/goldman.json";

export const EarningPolygraph = {
  company_name: DATA.entity_name !== null ? DATA.entity_name : "N/A",
  ticker: DATA.ticker !== null ? DATA.ticker : "N/A",
  event_title: DATA.event_title !== null ? DATA.event_title : "N/A",
  event_date: DATA.date !== null ? DATA.date : "N/A",
  participants: DATA.executive,
  ceo_name: DATA.ceo,
  sample_rate: 22.0,
  duration_qa: DATA.sum_duration_QA_s !== null ? DATA.sum_duration_QA_s : 0,
  duration_pr: DATA.sum_duration_PR_s !== null ? DATA.sum_duration_PR_s : 0,
  scatter_data: [
    {
      x:
        DATA.firm_performance_VOIC_avg !== null
          ? DATA.firm_performance_VOIC_avg
          : "N/A",
      y:
        DATA.firm_performance_SENT_avg !== null
          ? DATA.firm_performance_SENT_avg
          : "N/A",
      x_std:
        DATA.firm_performance_VOIC_std !== null
          ? DATA.firm_performance_VOIC_std
          : "N/A",
      y_std:
        DATA.firm_performance_SENT_std !== null
          ? DATA.firm_performance_SENT_std
          : "N/A",
    },
  ],
  radar_graph_data: [
    { name: "Joy", value: DATA.stat3 },
    { name: "Trust", value: DATA.sum_duration_PR },
    { name: "Surprise", value: DATA.sum_duration_QA },
    { name: "Surprises", value: DATA.f1_PR },
    { name: "Sadness", value: DATA.f1_QA },
    { name: "Disgust", value: DATA.stat3 },
    { name: "Anger", value: DATA.f1_PR },
    { name: "Anticipation", value: DATA.sum_duration_QA },
  ],
};

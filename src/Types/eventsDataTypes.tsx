export interface EventData {
  company_name: string;
  ticker: string;
  event_title: string;
  event_date: string;
  participants: string[];
  ceo_name: string[];
  sample_rate: number;
  duration_qa: number;
  duration_pr: number;
  scatter_data?: {
    x: number | string;
    y: number | string;
    x_std: number | string;
    y_std: number | string;
  }[];
  radar_graph_data: {
    name: string;
    value: number;
  }[];
}

export type futureArrivalTime = {
  trans_id: string;
  routes: [
    {
      sections: [
        {
          duration: number;
        },
      ];
    },
  ];
};

export interface futureRouteSearch {
  origin: string;
  destination: string;
  departure_time: string;
}

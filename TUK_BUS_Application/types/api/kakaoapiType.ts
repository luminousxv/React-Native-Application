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

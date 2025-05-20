interface Guide {
  guideName: number;
  guideLocation: number;
  starts: number;
  profileImage: string;
}

export interface TourGuidesProps {
  block: {
    guides: Guide[];
  };
}

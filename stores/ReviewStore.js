import { makeAutoObservable } from "mobx";
import instance from "./instance";

class Review {
  reviews = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchReviews = async (movieID) => {
    try {
      const res = await instance.get(`/${movieID}/reviews`);
      this.reviews = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createReview = async (newReview) => {
    try {
      const res = await instance.post("/createReview", newReview);
      const review = res.data;
      this.reviews.push(review);
    } catch (error) {
      console.log(error);
    }
  };
}

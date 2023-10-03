public class Dog {

    public int weightInpounds;

    public Dog(int w) {
        weightInpounds = w;
    }
    public void makeNoise() {
        if (weightInpounds < 10) {
            System.out.println("yipyipyip!");
        } else if(weightInpounds < 30) {
            System.out.println("bark. bark");
        } else {
            System.out.println("woof!");
        }
    }

    public Dog maxDog(Dog d2) {
        if (this.weightInpounds > d2.weightInpounds) {
            return this;
        }

        return d2;
    }
}

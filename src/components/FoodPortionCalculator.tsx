
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator } from "lucide-react";

const FoodPortionCalculator = () => {
  const [petType, setPetType] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePortion = () => {
    if (!petType || !weight || !age || !activityLevel) return;

    const weightNum = parseFloat(weight);
    let baseAmount = 0;

    // Base calculation (grams per day)
    if (petType === "dog") {
      baseAmount = weightNum * 30; // 30g per kg for dogs
    } else if (petType === "cat") {
      baseAmount = weightNum * 40; // 40g per kg for cats
    }

    // Age adjustment
    if (age === "puppy" || age === "kitten") {
      baseAmount *= 1.5;
    } else if (age === "senior") {
      baseAmount *= 0.8;
    }

    // Activity level adjustment
    if (activityLevel === "low") {
      baseAmount *= 0.8;
    } else if (activityLevel === "high") {
      baseAmount *= 1.3;
    }

    setResult(Math.round(baseAmount));
  };

  const reset = () => {
    setPetType("");
    setWeight("");
    setAge("");
    setActivityLevel("");
    setResult(null);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-amber-600" />
          Food Portion Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="petType">Pet Type</Label>
          <Select value={petType} onValueChange={setPetType}>
            <SelectTrigger>
              <SelectValue placeholder="Select pet type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="Enter weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age Group</Label>
          <Select value={age} onValueChange={setAge}>
            <SelectTrigger>
              <SelectValue placeholder="Select age group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="puppy">Puppy (under 1 year)</SelectItem>
              <SelectItem value="kitten">Kitten (under 1 year)</SelectItem>
              <SelectItem value="adult">Adult (1-7 years)</SelectItem>
              <SelectItem value="senior">Senior (7+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="activity">Activity Level</Label>
          <Select value={activityLevel} onValueChange={setActivityLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (Indoor, minimal exercise)</SelectItem>
              <SelectItem value="moderate">Moderate (Regular walks)</SelectItem>
              <SelectItem value="high">High (Very active, working dogs)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculatePortion} className="flex-1 bg-amber-600 hover:bg-amber-700">
            Calculate
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>

        {result && (
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-medium text-amber-800 mb-2">Recommended Daily Portion:</h4>
            <p className="text-2xl font-bold text-amber-900">{result}g per day</p>
            <p className="text-sm text-amber-700 mt-2">
              *This is a general guideline. Consult your veterinarian for specific dietary needs.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FoodPortionCalculator;

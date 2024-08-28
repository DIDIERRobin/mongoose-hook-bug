import { TestDocument } from "./test.schema";
// import { History } from "./history.schema";

export const preSaveHook = async function(this: TestDocument) {
  console.log("Entering hook at " + new Date().toISOString());

  const historyModel = this.model("History");
  // replace the above line with the following and uncomment the import statement to fix the error
  // const historyModel = this.model(History.name);
  await historyModel.create({
    version: 1,
    test: this
  });

  return this;
};

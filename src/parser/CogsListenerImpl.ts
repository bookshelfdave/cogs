import { CogsListener } from "./CogsListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ProgContext, ExprContext } from "./CogsParser";
import { ParserRuleContext } from "antlr4ts";

export class CogsListenerImpl implements CogsListener {
  values: Map<any, any>;

  constructor() {
    this.values = new Map<any, any>();
  }

  public getValues(): Map<any, any> {
    return this.values;
  }

  enterExpr(ctx: ExprContext) {
    if (ctx._left != null) {
      console.log(">>>" + ctx._left.text);
    }
    if (ctx._right != null) {
      console.log("<<<" + ctx._right.text);
    }
  }

  enterProg(ctx: ProgContext) {
    this.values.set(ctx, "prog start");
  }
}

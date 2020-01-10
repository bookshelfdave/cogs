// Generated from src/parser/Cogs.g4 by ANTLR 4.7.3-SNAPSHOT

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./CogsParser";
import { ExprContext } from "./CogsParser";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `CogsParser`.
 */
export interface CogsListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `CogsParser.prog`.
   * @param ctx the parse tree
   */
  enterProg?: (ctx: ProgContext) => void;
  /**
   * Exit a parse tree produced by `CogsParser.prog`.
   * @param ctx the parse tree
   */
  exitProg?: (ctx: ProgContext) => void;

  /**
   * Enter a parse tree produced by `CogsParser.expr`.
   * @param ctx the parse tree
   */
  enterExpr?: (ctx: ExprContext) => void;
  /**
   * Exit a parse tree produced by `CogsParser.expr`.
   * @param ctx the parse tree
   */
  exitExpr?: (ctx: ExprContext) => void;
}

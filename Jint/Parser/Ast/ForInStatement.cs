namespace Jint.Parser.Ast
{
    public class ForInStatement : Statement
    {
        public SyntaxNode Left;
        public SyntaxNode Right;
        public Statement Body;
        public bool Each;
    }
}
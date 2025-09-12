import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">Logo</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Column Heading</h3>
              <a href="#" className="text-sm text-muted-foreground">
                Link 1
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                Link 2
              </a>
            </FooterColumn>
            {/* …more columns */}
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Company Name. All rights reserved</div>
            <div className="flex items-center gap-4">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}

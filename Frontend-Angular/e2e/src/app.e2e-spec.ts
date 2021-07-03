import { browser, by , logging, protractor} from "protractor";
import { element } from "protractor";
import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should navigate to login page", function() {
    browser.get("http://localhost:4200");
    expect(browser.getCurrentUrl()).toContain("login");
  });
  it("should not login", function() {
    let email = element(by.name("txtEmail"));
    let pass = element(by.name("txtPass"));
    email.sendKeys("hello.com");
    pass.sendKeys("bello");
    let button = element(by.name("loginButton"));
    expect(button.isEnabled()).toBe(false);
    button.click();
    browser.refresh();
    
  });

  it("should login successfully and navigate to dashboard", function() {
    let email = element(by.name("txtEmail"));
    let pass = element(by.name("txtPass"));
    email.sendKeys("deepak@infy.com");
    pass.sendKeys("Hello@123");
    let button = element(by.name("loginButton"));
    button.click();
    browser.sleep(1000)
    browser.waitForAngular();
    const checkDashboard = element(by.className("mat-tab-label-content")).getText();
    expect(checkDashboard).toEqual("Electronics");
  });
  
  it("should search for an item", () => {
    var search = element(by.name("searchbar"));
    browser.sleep(2000);
    search.sendKeys("Adidas");
    var button = element(by.name("searchbtn"));
    button.click();
    browser.sleep(2000)
    expect(browser.getCurrentUrl()).toContain("searchprod/Adidas");
    // button.click();
    // browser.refresh();
  });
  it("should open item details",()=>{
    browser.sleep(2000)
    var button= element(by.name("dispbutton"));
    button.click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain("displayproduct");
  })

  it("should be able to show the success message",()=>{
    browser.sleep(2000)
    var button= element(by.name("buynow"));
    button.click();
    browser.sleep(2000);
    const buynow = element(by.className("text-success")).getText();
    expect(buynow).toEqual("Ordered Successfully! Enjoy Shopping!");
  })
  it("should go back to the dashboard",()=>{
    browser.sleep(2000)
    var button= element(by.name("goback"));
    button.click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain("dashboard");
  })
  it("should display orders",()=>{
    browser.sleep(2000)
    var button= element(by.name("orders"));
    button.click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain("vieworders");
  })

  it("should log out", () => {
    var button = element(by.name("logout"));
    button.click();
  });




  // it("should display welcome message", () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual("HooplaProject app is running!");
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

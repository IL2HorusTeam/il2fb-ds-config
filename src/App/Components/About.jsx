import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';

const FormItem = Form.Item;


export default class About extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    return (
      <div>
        <h1>About server</h1>
        <Form layout="horizontal" style={{ maxWidth: '540px' }}>
          <FormItem
            label="Name"
            {...formItemLayout}
          >
            <Input placeholder="Example server" />
          </FormItem>
          <FormItem
            label="Description"
            {...formItemLayout}
          >
            <Input placeholder="Example server description" />
          </FormItem>
        </Form>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tempor. Vivamus non pulvinar erat, a luctus dolor. Ut tempor lectus vel mauris ultrices interdum. Quisque tempor tellus consequat, commodo nisl eu, venenatis ante. Vestibulum id suscipit mauris, in cursus felis. Morbi ullamcorper elit in pretium vestibulum. Etiam bibendum nibh sed ipsum congue venenatis. Vestibulum commodo ac turpis et maximus. Donec ultrices nulla non ante cursus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet ultricies magna sed faucibus. Phasellus pulvinar orci metus, nec ornare turpis faucibus a. Integer ut arcu non nibh molestie pretium non a mauris. Praesent eleifend tellus neque, sit amet blandit orci dignissim dictum. Aenean sollicitudin est ut orci ullamcorper, ut tempus nulla viverra.
        </p>
        <p>
          In molestie urna ligula, ut faucibus ex consectetur vitae. Vestibulum aliquet massa ac tortor elementum sollicitudin. Nam nec pharetra ipsum. Nam lorem neque, blandit ut mauris iaculis, aliquet finibus diam. Integer ac neque a elit mollis pharetra. Vivamus purus est, hendrerit eget sagittis sit amet, consequat id elit. Fusce in lobortis nisl, quis egestas nunc. Ut sodales nisl nunc. Nam sit amet erat ut sem luctus viverra et at orci. Sed consequat turpis at lectus finibus maximus. Fusce rutrum magna sodales bibendum tristique. Pellentesque nunc felis, interdum id sem id, sagittis efficitur sem.
        </p>
        <p>
          Nullam interdum ex pharetra eros pulvinar, non vehicula metus tincidunt. Donec non enim et turpis mattis molestie sit amet eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis tempor quam, malesuada fermentum libero commodo vitae. Suspendisse ante elit, accumsan at bibendum at, commodo non est. Suspendisse tristique nunc eu lacinia malesuada. Proin suscipit purus augue, id tempor lectus viverra vel. Nunc faucibus leo turpis, vel convallis metus placerat sed. Pellentesque consectetur turpis sit amet nibh ultrices, nec ornare nulla sollicitudin. Praesent semper tellus ut elit egestas, pharetra malesuada orci tempor. Nam vulputate turpis id sapien ornare, at efficitur massa fringilla. Donec mollis diam urna, eu varius quam pretium vitae. Phasellus accumsan tortor eget maximus hendrerit. Donec consequat ultrices tellus non accumsan. Sed pellentesque eget leo non pharetra.
        </p>
        <p>
          Ut nisl lorem, elementum in pellentesque sed, interdum a arcu. Aenean tincidunt est a mattis suscipit. Vivamus interdum lacus mattis augue fringilla rutrum. Etiam molestie vitae tellus ut pulvinar. Vestibulum at mattis odio. Cras fermentum pretium quam at dignissim. Cras porta arcu vel euismod mattis. Praesent finibus dolor eget justo malesuada euismod. Sed aliquam, odio nec pretium accumsan, purus felis varius ex, vel vehicula massa justo sed nisi.
        </p>
        <p>
          Nulla maximus mattis ante, vestibulum gravida velit efficitur non. Quisque pellentesque, leo ac elementum elementum, quam mauris tempor lacus, sit amet vestibulum ligula nulla a nisl. Phasellus elementum augue tortor, id mollis tortor euismod non. Ut molestie arcu quam, sit amet tincidunt felis sagittis id. Vivamus risus mi, vestibulum et nunc id, sagittis hendrerit tortor. Donec vitae erat sodales justo congue cursus. Donec sed est nisl. Suspendisse potenti. Aliquam lacinia, ante vitae convallis facilisis, justo turpis ultricies velit, eget porta risus orci eu mi. Morbi venenatis felis quis luctus tincidunt. Phasellus tempor sem mauris. Duis tempor eu nisi a venenatis.
        </p>
      </div>
    );
  }

}
